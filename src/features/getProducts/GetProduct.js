import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
export const API = import.meta.env.VITE_API_URL;

export const getDataById = createAsyncThunk(
  "todolist/getDataById",
  async (id) => {
    try {
      let { data } = await axios.get(
        `${API}/Product/get-product-by-id?id=${id}`
      );
      console.log(data.data);
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const ProductGet = createAsyncThunk("todolist/ProductGet", async () => {
  const token = localStorage.getItem("accaunt");
  try {
    let { data } = await axios.get(`${API}/Cart/get-products-from-cart`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data.data[0];
  } catch (error) {
    console.error(error);
  }
});

export const Category = createAsyncThunk("todolist/Category", async () => {
  try {
    let { data } = await axios.get(`${API}/Category/get-categories`);
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.error(error);
  }
});

export const getBrand = createAsyncThunk("brands/getBrand", async () => {
  const brandURL = "https://store-api.softclub.tj/Brand";
  const response = await axios.get(`${brandURL}/get-brands`);
  return response.data.data;
});

export const GetPraducData = createAsyncThunk(
  "getProduct/data",
  async (params = {}) => {
    const query = new URLSearchParams();

    if (params.MinPrice != undefined) query.append("MinPrice", params.MinPrice);
    if (params.MaxPrice != undefined) query.append("MaxPrice", params.MaxPrice);
    if (params.BrandId != undefined) query.append("BrandId", params.BrandId);
    if (params.CategoryId != undefined)
      query.append("CategoryId", params.CategoryId);
    if (params.ProductName) query.append("ProductName", params.ProductName);
    const response = await axios.get(
      `${API}/Product/get-products?${query.toString()}`
    );
    return response.data.data.products;
  }
);

export const IncreasePro = createAsyncThunk(
  "todolist/IncreasePro",
  async (id, { dispatch }) => {
    try {
      const token = localStorage.getItem("accaunt");
      await axios.put(
        `${API}/Cart/increase-product-in-cart?id=${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(ProductGet());
    } catch (error) {
      console.error(error);
    }
  }
);

export const DicrimentPro = createAsyncThunk(
  "todolist/DicrimentPro",
  async (id, { dispatch }) => {
    try {
      const token = localStorage.getItem("accaunt");
      await axios.put(
        `${API}/Cart/reduce-product-in-cart?id=${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(ProductGet());
    } catch (error) {
      console.error(error);
    }
  }
);
export const DeletePro = createAsyncThunk(
  "todolist/DeletePro",
  async (id, { dispatch }) => {
    try {
      const token = localStorage.getItem("accaunt");
      await axios.delete(`${API}/Cart/delete-product-from-cart?id=${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(ProductGet());
    } catch (error) {
      console.error(error);
    }
  }
);

export const ClearePro = createAsyncThunk(
  "todolist/ClearePro",
  async (state, { dispatch }) => {
    try {
      const token = localStorage.getItem("accaunt");
      await axios.delete(`${API}/Cart/clear-cart`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(ProductGet());
    } catch (error) {
      console.error(error);
    }
  }
);

export const profile = createAsyncThunk("todolist/profile", async () => {
  const token = localStorage.getItem("accaunt");
  let id = jwtDecode(token);
  try {
    let { data } = await axios.get(
      `${API}/UserProfile/get-user-profile-by-id?id=${id.sid}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return data.data;
  } catch (error) {
    console.error(error);
  }
});

export const postProduct = createAsyncThunk(
  "todolist/postProduct",
  async (id, { dispatch }) => {
    const token = localStorage.getItem("accaunt");
    try {
      await axios.post(
        `${API}/Cart/add-product-to-cart?id=${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(ProductGet());
    } catch (error) {
      console.error(error);
    }
  }
);

export const editProfile = createAsyncThunk(
  "todolist/editProfile",
  async (elem , {dispatch}) => {
    const token = localStorage.getItem("accaunt");
    try {
      await axios.put(`${API}/UserProfile/update-user-profile`, elem , {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(profile())
    } catch (error) {
      console.error(error);
    }
  }
);

export const getProduct = createSlice({
  name: "todolist",
  initialState: {
    data: [],
    product: [],
    categories: [],
    productById: [],
    profileUser: [],
    brand: [],
    wishlist: JSON.parse(localStorage.getItem("wishList")) || [],
  },
  reducers: {
    setWishList: (state, action) => {
      let obj = action.payload;

      let isHere = state.wishlist.find((e) => e.id == obj.id);
      if (isHere) {
        state.wishlist = state.wishlist.filter((e) => e.id != obj.id);
      } else {
        state.wishlist.push(obj);
      }
      localStorage.setItem("wishList", JSON.stringify(state.wishlist));
    },
    setDeletePro: (state, id) => {
      state.wishlist = state.wishlist.filter((e) => e.id != id.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetPraducData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(ProductGet.fulfilled, (state, action) => {
      state.product = action.payload;
    });
    builder.addCase(Category.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(getDataById.fulfilled, (state, action) => {
      state.productById = action.payload;
    });
    builder.addCase(profile.fulfilled, (state, action) => {
      state.profileUser = action.payload;
    });
    builder.addCase(getBrand.fulfilled, (state, action) => {
      state.brand = action.payload;
    });
  },
});

export const { setWishList, setDeletePro } = getProduct.actions;

export default getProduct.reducer;
