export const roleRoutes: { [key: string]: string[] } = {
  '/dashboard': ['admin', 'master'],
  '/dashboard/category': ['admin', 'master'],
  '/dashboard/category/create': ['master'],
  '/dashboard/category/edit/[id]': ['master'],
  '/dashboard/products': ['admin', 'master'],
  '/dashboard/products/create': ['master'],
  '/dashboard/products/edit/[id]': ['master'],
  '/dashboard/inventory': ['admin', 'master'],
  '/dashboard/inventory/edit/[id]': ['master'],
};
