import { createSelector } from "reselect";

const selectDirectory = state => state.sections;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
)