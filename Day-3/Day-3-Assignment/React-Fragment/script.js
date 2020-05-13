


// React fragment usage:
// Fragments lets you group a list of children without adding extra nodes to the DOM 
// React Fragment outputs no HTMLElement.


const domItems=React.createElement(
  "ul",
  null,
  React.createElement(
     React.Fragment,
    null,
    React.createElement(
      "li",
      null,
      "The fragment element is not rendered to the DOM."
    ),
    React.createElement(
      "li",
      null,
      "You can confirm this by right clicking on one of these items in the preview pane, and inspecting the markup in the browser dev tools."
    )
  ));



ReactDOM.render(
  domItems,
  document.getElementById("root")
)


// ReactDOM.render(
//   React.createElement(
//     "ul",
//     null,
//     React.createElement(
     
//        React.Fragment,
//       null,
//       React.createElement(
//         "li",
//         null,
//         "The fragment element is not rendered to the DOM."
//       ),
//       React.createElement(
//         "li",
//         null,
//         "You can confirm this by right clicking on one of these items in the preview pane, and inspecting the markup in the browser dev tools."
//       )
//     )
//   ),

//   document.getElementById("root")
// )
