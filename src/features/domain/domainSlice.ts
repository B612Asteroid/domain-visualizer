import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { DomainNode, EntityNode, RelationNode } from "./types";

const initialState: DomainNode = {
  name: "",
  entities: [],
  relations: [],
};

const domainSlice = createSlice({
  name: "domain",
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setEntities(state, action: PayloadAction<EntityNode[]>) {
      state.entities = action.payload;
    },
    setRelations(state, action: PayloadAction<RelationNode[]>) {
      state.relations = action.payload;
    },
  },
});

export const { setName, setEntities, setRelations } = domainSlice.actions;
export default domainSlice.reducer;
