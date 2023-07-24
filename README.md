#  Software Requirements Specification (SRS) 

## 1. Introduction

### 1.1 Purpose of the Document
The purpose of this document is to comprehensively define and outline the functional and non-functional specifications, as well as the system requirements, for the development and future maintenance of phone2door.com, a B2C e-commerce platform dedicated to phone accessories. This document will serve as a primary reference point for development and future maintenance, ensuring a clear understanding of the system's objectives and capabilities.

### 1.2 Scope of the System

"Phone2Door.com is a B2C e-commerce platform designed to provide a seamless online shopping experience for phone accessories. The platform will have an end consumer oriented side and an admin panel for managing the platform's operations.

The system's primary capabilities will include:

- **Product Browsing:** Users will be able to browse through a catalog of phone accessories, including phone cases, screen protectors, chargers, Tablet cases and phone holders. Each product will have a page with detailed product information, with images for the different color variations of the product, descriptions, compatible devices, price and customer reviews.

- **Shopping Cart:** Users will be able to add items to a shopping cart, allowing them to review their selections before making a purchase.

- **Checkout and Payment Processing:** Users will be able to securely checkout and make payments via Stripe, initially only via credit card and later more payment options will be added. On Checkout there are three options: 1) guest checkout, no account will be created, 2) signup and purchase, the user will enter his email and password before the purchase and the system will create an account in the background while he checks out.

- **Order Management:** Users will be able to view their order history, track their orders, and request returns or refunds if necessary.

- **User Account Management:** Users will be able to create personal accounts where they can manage their profile information and track their orders.

- **Search and Recommendation:** The system will include a search function, allowing users to find specific products via the search bar in the header. Additionally, the platform will recommend the best selling products on the home page.

- **Administrative Functions:** Administrators will be able to manage the product catalog i.e. create, delete and edit products, process orders i.e. view, change status, cancel or create orders manually. The customer service inquiries will be handled via an email form using emailjs. The admin analytics is supposed to generate reports on sales and user activity.

The platform aims to an easy and relaxed online shopping experience so beautiful design, robust performance and reliability is key. That way the customer doesn't have to think about anything, we make it as easy for him to purchase products as possible.

### 1.3 Definitions, Acronyms, and Abbreviations
Nope.

### 1.4 References

The development of phone2door.com is informed by a variety of resources, including technical documentations, design inspirations, and examples of existing online stores. The main references for this project are:

#### Documentations:
- [Blazity GitHub Repo Template](https://github.com/Blazity/next-enterprise)
- [NextJS Documentation for the App Router](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Stripe Checkout Documentation](https://stripe.com/docs/payments/checkout)
- [Stripe Webhook Documentation](https://stripe.com/docs/webhooks)

#### Design:
- [Design Inspiration Image](https://as2.ftcdn.net/v2/jpg/03/27/16/65/500_F_327166500_9k8uEJt38z6fH5f2jyxQlmofrpViyCEy.jpg)
- Color Palette: Coastal Blue (#0388A6), Turquoise Mist (#0BADBF), Aquamarine Serenity (#0FBFBF), Seafoam Green (#32D9C8), and Sandy Beige (#F2D5C4)
- [Original Figma File](https://www.figma.com/file/pFirMdcVr8siv7J18T6x7i/Phone2Door.com?type=design&node-id=0%3A1&mode=design&t=Sgg43EzocgbofJWy-1)

#### Example of an Online Store:
- [Cellular Outfitter](https://www.cellularoutfitter.com/)

### 1.5 Overview of the Document

This Software Requirements Specification (SRS) document is divided into several sections, each providing detailed information about the phone2door.com e-commerce platform:

- **Introduction:** This section provides an overview of the purpose, scope, and references used in the creation of this document.
- **Overall Description:** This section provides a high-level view of the product, its functions, user characteristics, constraints, and assumptions.
- **System Features & Requirements:** This section outlines the component structure, database, design and implementation constraints, user documentation, and assumptions and dependencies.
- **Functional Requirements:** This section details the specific functionalities the system will provide, such as user registration, product catalog, shopping cart, payment processing, order management, and more.
- **Non-Functional Requirements:** This section outlines the performance, safety, security, and software quality attributes of the system.
- **Interface Requirements:** This section describes the user, hardware, software, and communication interfaces of the system.

