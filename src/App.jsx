import React from "react";
import './App.css';
import 'antd/dist/reset.css';

import LayoutDefault from "./layout/LayoutDefault"

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <LayoutDefault></LayoutDefault>
  );
}
