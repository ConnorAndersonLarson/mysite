import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";
import Header from "./Header.js";
var jsdom = require("mocha-jsdom");

global.document = jsdom({
  url: "http://localhost:3000/"
});


let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("Header Component Test", () => {
  it("Renders My Name", () => {
    act(() => {
      ReactDOM.render(<Header />, rootContainer);
    });
    const title = rootContainer.querySelector(".name");
    expect(title.textContent).to.equal("Connor Anderson-Larson")
  })
})


//./node_modules/.bin/mocha --require babel-register --ignore-styles ./src/components/Header/Header.test.js
