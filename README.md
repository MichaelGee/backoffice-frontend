# **File Structure**

 `/assets` - This directory contains static assets (fonts, images, icons etc).

 `/components` - This directory contains independent React components that
  could be reused throughout the website, which are grouped into atoms and organisms.

 `/contexts` - This directory contains all React context files.

 `/hooks` - This directory contains reuseable hooks.

  `/assets` - This directory contains all the pages in this project.

 `/redux` - This directory contains Redux and all associated Redux setup files.

  `/utils` - This directory contains Javascript utility functions and helper functions.

# User Interface Design System

This Project is built with the design concept of **Atomic Design**. Atomic design is methodology for creating design systems. Atomic units bond together to form molecules, which in turn combine into more complex organisms to ultimately create all matter in our universe.

Similarly, interfaces are made up of smaller components. This means we can break entire interfaces down into fundamental building blocks and work up from there. That’s the basic gist of atomic design. For more details, check out the this [Atomic Design](https://atomicdesign.bradfrost.com/) article.

There are four distinct levels in atomic design:

1. Atoms
2. Molecules
3. Organisms
4. Pages

_**Atoms**_: Atoms are the basic building blocks of matter. In relation to web interfaces, atoms are elements such as a form label, checkbox, an input, button, icons, avatar and all that stuff. Atoms are the smallest units of interface design.

_**Molecules**_: Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound. These molecules take on their own properties and serve as the backbone of our design systems. For example, a form label, input or button aren’t too useful on their own, but combine them together as a form and now they can actually do something together. For example, a search bar, a navigation bar and also footer.

_**Organisms**_: Organisms can consist of similar and/or different molecule types. For example, a organism might consist of diverse components like a side bar, modal, product grid, tables.

_**Pages**_: Pages are the highest level of interface design. They combine all the elements of an atomic design, which in turn gives us the ability to create pages.

| Components | Examples                                                            |
| ---------- | ------------------------------------------------------------------- |
| Atoms      | Buttons, Avatars, Icons, Inputs, Labels, Cards, Lists, Tables, etc. |
| Molecules  | Forms, Modals, Sidebars, Cards, Tables, Navbar etc.                 |
| Organisms  | Product Grid, Tables, etc.                                          |

Remember, the goal is to create a simple, yet powerful, interface design system but each element and what they represent in relation to atomic desig are subject to interpretation, but the basic rules of the structure should be followed to make it easy to create.
# **Commands**

# **Deployment**