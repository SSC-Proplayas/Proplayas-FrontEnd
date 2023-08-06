/*import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';
import { RootState } from '../store';


interface BookState {
  books: Book[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

interface Book {
  id: number;
  title: string;
  author: string;
  cover_image: string;
  book_file: string;
  // Agregar más campos según se requiera
}

const initialState: BookState = {
  books: [],
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState; // Obtenemos el estado
  const token = state.auth.token; // Aquí tenemos el token

  // Si no hay token, rechazamos la solicitud
  if (!token) {
    return thunkAPI.rejectWithValue('No autorizado');
  }

  const response = await axios.get('/api/books/', {
    headers: {
      Authorization: `Bearer ${token}`, // Pasamos el token en los headers
    },
  });
  return response.data;
});

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
      state.status = 'succeeded';
      state.books = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export default bookSlice.reducer;*/
