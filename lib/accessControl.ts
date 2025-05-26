export const roleRoutes: { [key: string]: string[] } = {
  '/dashboard': ['admin', 'master'],
  '/dashboard/category': ['admin', 'master'],
  '/dashboard/category/create': ['master'],
  '/dashboard/category/edit/:path*': ['master'],
  '/dashboard/products': ['admin', 'master'],
  '/dashboard/products/create': ['master'],
  '/dashboard/products/edit/:path*': ['master'],
  '/dashboard/inventory': ['admin', 'master'],
  '/dashboard/inventory/edit/:path*': ['master'],
};
