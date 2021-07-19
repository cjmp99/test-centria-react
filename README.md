# Example store with:

    React js
    React Context
    Styled components
    Prime React

    Steps for get up server local

    * git pull origin master
    * npm install
    * npm start

    http://localhost:3000

    Structure the project

    - components: non-functional components folder
    
        -header: navbar in the site
        -layout: global component that encloses all views trough property props.children
        -list: component where list all products
        -modal: folder where are the modals Confirm Purchase and Show Shipment
        
    - context: folder where are the files for global state using Context API

    - hooks: folder where are the files custom hooks the site

    - pages: folder where are the views which represent the routes the site

    - styled-components: folder where are the files for styled components

    - jsconfig.json: configuration file to make the way in which we access the files of our project more dynamic in such a case that there are many folders within other folders and avoid "../../../../../../../"...