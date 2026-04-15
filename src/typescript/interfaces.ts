import { ReactNode } from "react";

// Define the interface for the component props in the main layout page
export interface MainLayoutProps {
  sidebar: ReactNode;     
  productGrid: ReactNode;        
  itemCount: number;      
  sortElement: ReactNode;  
}

//  the Product structure based on FakeStoreAPI
export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}


export interface ProductCardProps {
  product: Product;
}


export interface PageProps {
  searchParams: {
    sort?: string;
    category?: string;
  };
}

export interface SortDropdownProps {
  defaultValue: string;
}