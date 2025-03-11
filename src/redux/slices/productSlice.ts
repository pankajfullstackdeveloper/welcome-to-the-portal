
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/types/product';

// Temporary products data - will be replaced with API calls
import { TEMP_PRODUCTS } from '@/data/products';

interface ProductsState {
  products: Product[];
  filteredProducts: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  selectedProduct: null,
  loading: false,
  error: null,
};

// This will be implemented with a real API later
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    // Mock API call for now
    return new Promise<Product[]>((resolve) => {
      setTimeout(() => {
        resolve(TEMP_PRODUCTS);
      }, 500);
    });
  }
);

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (productId: number) => {
    // Mock API call for now
    return new Promise<Product>((resolve, reject) => {
      setTimeout(() => {
        const product = TEMP_PRODUCTS.find(p => p.id === productId);
        if (product) {
          resolve(product);
        } else {
          reject(new Error('Product not found'));
        }
      }, 500);
    });
  }
);

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterByCategory: (state, action: PayloadAction<string>) => {
      if (action.payload === '') {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter(
          product => product.category === action.payload
        );
      }
    },
    searchProducts: (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredProducts = state.products.filter(product => 
        product.title.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm)
      );
    },
    clearFilters: (state) => {
      state.filteredProducts = state.products;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      })
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch product';
      });
  },
});

export const { filterByCategory, searchProducts, clearFilters } = productSlice.actions;

export default productSlice.reducer;
