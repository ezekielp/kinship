export const SHOW_DROPDOWN = "SHOW_DROPDOWN";
export const HIDE_DROPDOWN = "HIDE_DROPDOWN";

export const showDropdown = dropdown => ({
  type: SHOW_DROPDOWN,
  dropdown
});

export const hideDropdown = () => ({
  type: HIDE_DROPDOWN
});
