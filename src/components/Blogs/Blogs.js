import React from "react";

const Blogs = () => {
  return (
    <div style={{ minHeight: "100vh" }} className="container mt-4 mb-4">
      <h1 className="text-center text-warning">Q&A</h1>

      <div className="container   border mt-4 mb-4 shadow border-light">
        {/* Question 1 */}
        <div className="text-secondary fw-bold fs-5 mt-2  fst-italic text-bold">
          <span className="text-danger">Question:</span> Difference between
          javascript and nodejs
        </div>
        <div className=" fst-italic  mt-2 mb-2">
          <span className="text-success fw-bold">Answer:</span> JavaScript is a
          client-side scripting language that is lightweight, cross-platform,
          and interpreted. Both Java and HTML include it. Node.js, on the other
          hand, is a server-side scripting language based on Google Chrome V8.
          As a result, network-centric applications are built with it. It's a
          distributed system designed for real-time data-intensive applications.
          The key benefits of JavaScript include a wide choice of interfaces and
          interaction, as well as just the correct amount of server contact and
          direct visitor input. Node.js, on the other hand, offers a node
          package manager with over 500 modules and the capacity to handle many
          requests at the same time. It also offers the unique ability to enable
          microservice architecture and the Internet of Things.
        </div>
      </div>
      {/* Question 2 */}
      <div className="container   border mt-4 mb-4 shadow border-light">
        <div className="text-secondary fw-bold fs-5 mt-2  fst-italic text-bold">
          <span className="text-danger">Question:</span> When should you use
          nodejs and when should you use mongodb?
        </div>
        <div className="fst-italic mt-2 mb-2">
          <span className="text-success fw-bold">Answer:</span> Nodejs is a
          Javascript engine that can be used to create any application. It
          executes Javascript code. It is most typically used to create web
          servers, but it may also be used to create a variety of other types of
          programming. MongoDB is a database management system. MongoDB is used
          by code within an application or server to save, query, and update
          data in a database. Many web servers developed with Node.js will store
          data in MongoDB.
        </div>
      </div>
      {/* Question 3 */}
      <div className="container   border mt-4 mb-4 shadow border-light">
        <div className="text-secondary fw-bold fs-5 mt-2  fst-italic text-bold">
          <span className="text-danger">Question:</span> Differences between sql
          and NoSql databases.
        </div>
        <div className="fst-italic  mt-2 mb-2">
          <span className="text-success fw-bold">Answer:</span> The most
          prevalent and popular programming language for relational database
          management systems is SQL, or Structured Query Language. It's a
          programming language for extracting, storing, inserting, deleting,
          updating, and managing structured data and strategic analysis. A NoSQL
          database is a type of database that allows you to store and retrieve
          data in formats other than tabular. It now stands for Not Just SQL. It
          allows huge data to be stored in organized, unstructured,
          semi-structured, or polymorphic forms, rather than just tables.
        </div>
      </div>
      {/* Question 4 */}
      <div className="container   border mt-4 mb-4 shadow border-light">
        <div className="text-secondary fw-bold fs-5 mt-2  fst-italic text-bold">
          <span className="text-danger">Question:</span> What is the purpose of
          jwt and how does it work?
        </div>
        <div className="fst-italic  mt-2 mb-2">
          <span className="text-success fw-bold">Answer:</span> JWT token is a
          efficient way to authorize an user. It's full form is JASON Web Token
          .Unlike old authorization process of storing cookies and season data
          for a user in a server and then check each time if the user is same or
          not, JWT use JSON data formate to store token and store it in client
          side. so that we don't have to store token in server. When a user log
          in then server creates a secret token using any hashing algorithm and
          then store it in browser. Each time user try to access any page it
          send request to the server. Server verify the request and send back
          responses. The benefit of this process is we can set a expire time for
          the token, run multiple server of same application or different
          application without the user have to login again. and the server
          doesn't have to store any token.
        </div>
      </div>
    </div>
  );
};

export default Blogs;
