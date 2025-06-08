    import { NextResponse } from 'next/server';
    import connectToDB from '@/lib/db';
    import Product  from '@/models/Product';

    export async function GET() {
    await connectToDB();

    try {
        const result = await Product.aggregate([
        {
            $lookup: {
            from: 'categories',        
            localField: 'categoryId',  
            foreignField: '_id',       
            as: 'categoryData',
            },
        },
        {
            $unwind: '$categoryData',    
        },
        {
            $group: {
            _id: '$categoryData.name', 
            count: { $sum: 1 },        
            },
        },
        {
            $project: {
            _id: 0,
            category: '$_id',           // Rename _id to category
            count: 1,
            },
        },
        ]);

        return NextResponse.json(result);
    } catch (err) {
        console.error('Error aggregating product data:', err);
        return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
    }
    }
