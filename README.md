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

## 2. Overall Description

### 2.1 Product Perspective

Phone2Door.com is designed to provide an easy and relaxing online shopping experience in the phone accessories market. Unlike many e-commerce platforms that bombard customers with information and choices, Phone2Door.com aims to create a sense of relaxation and an enjoyable user experience. The platform focuses on simplicity and ease-of-use, minimizing the hassle.

While the platform's functionality aligns with standard e-commerce practices, its distinguishing factor lies in its user experience. The goal is to cater to customers who prefer a more straightforward instead of an information-heavy shopping experience.

### 2.2 Product Functions

The main functions of the Phone2Door.com platform are divided into two user roles: Customer and Admin.

#### Customer Functions:

- **Product Browsing:** Customers can view a carousel of bestsellers and different product categories on the home page. They can enlarge the product to view more information and add the product in their preferred color to the cart.
- **Checkout and Payment:** Customers can checkout with an existing account, a new account, or as a guest. Payments are processed securely via Stripe.
- **Order Tracking and Reviews:** After purchase, customers can track their orders and write reviews about the products. 
- **Returns:** Customers can request to return items, providing a message and pictures to the admin for review.
- **Wishlist:** Customers can add products to a wishlist for future purchase.
- **Account Management:** Customers can create an account to track orders and save personal information for faster checkout in the future.

#### Admin Functions:

- **Order Management:** Admins can view incoming orders, change order status (which triggers an email notification to the customer), and manually edit or cancel orders.
- **Return Management:** Admins can view return requests from customers and approve or disapprove them.
- **Analytics Dashboard:** Admins have access to a dashboard displaying key metrics such as revenue, sales per item, user traffic, and performance.
- **User Profile Management:** Admins can view and manage user profiles to resolve any issues.
- **Settings Panel:** The settings panel allows admins to manage various aspects of the store. (We'll detail this in the next step.)- -
- **Product Panel:** A dedicated panel where admins can view and manage products in the catalog.

### 2.3 User Characteristics

There are two main types of users who will interact with the Phone2Door.com platform:

#### Customer:

Customers are the primary users of the platform. They are individuals looking to purchase phone accessories online. Their main tasks include browsing products, adding items to the cart, checking out, tracking orders, writing reviews, and managing their account.

#### Admin:

Admins are responsible for maintaining the platform. Their main tasks include managing the product catalog, processing orders, handling return requests, viewing and managing user profiles, and configuring system settings. They have access to the admin panel, which includes the order management panel, analytics dashboard, user profile management, product panel, and settings panel.

### 2.4 Constraints

#### Technical Constraints:
- Development and production technologies include React, NextJS, Tailwind CSS, Supabase, and TypeScript.
- The platform should be compatible with the most popular browsers on both iOS and Android devices, including Safari, Chrome, Firefox, and Edge.
- All page load times should be below 2 seconds. All data mutations should occur on the server unless it is not possible.

#### Regulatory Constraints:
- The platform must comply with the General Data Protection Regulation (GDPR), which includes requirements for data protection, user consent, data portability, and the right to be forgotten. More details on GDPR can be found [here](https://gdpr-info.eu/).
- The platform must also comply with German consumer protection laws, which include the right to return online purchases within 14 days, the requirement to provide detailed product information, and more. More details can be found [here](https://www.gesetze-im-internet.de/englisch_bgb/englisch_bgb.html#p3553).
- The platform will use Stripe for payment processing, which complies with the Payment Services Directive (PSD2) requirements for strong customer authentication.

#### Operational Constraints:
- The platform aims for at least 99% uptime.
- A backup and recovery plan should be in place to protect data and ensure system recovery in case of a failure. This could include regular data backups, a disaster recovery plan, and the use of redundant systems.
- Maintenance tasks, including system updates and bug fixes, will be handled by one person. User support will be handled by the admin.

#### Resource Constraints:
- The platform aims to go live by August 7th.
- The development team consists of 3 people, and the maintenance team consists of 1 person.

### 2.5 Assumptions and Dependencies

#### Assumptions:
- **User Behavior:** The platform is designed for users who are likely to have internet literacy and familiarity with online shopping. The primary target demographic is individuals under the age of 40.
- **Market Conditions:** The platform assumes a steady demand for phone accessories and that the product offerings will meet the needs of the target market.
- **Technical Infrastructure:** The platform is designed to accommodate users with varying internet connection quality, including potentially poor mobile connections. It also assumes users will be using a wide range of different mobile devices.

#### Dependencies:
- **Third-Party Services:** The platform depends on several third-party services, including Stripe for payment processing and Supabase for backend services. Any downtime or changes in these services could impact the operation of the platform.
- **Suppliers:** The product catalog may be impacted by changes in supplier pricing, availability, or quality. However, these changes will be managed by the admin.
- **Regulatory Compliance:** The platform must comply with various laws and regulations, including [GDPR](https://gdpr-info.eu/) and [German consumer protection laws](https://www.gesetze-im-internet.de/englisch_bgb/englisch_bgb.html#p3553). Changes in these regulations may require updates to the platform.

## 3. System Features

### 3.1 Product Carousel

#### Description and Priority
The product carousel is a high-priority feature that displays an array of items on the home page. It provides a quick and easy way for customers to browse the best-selling items and items from each product category. When the customer clicks the heading of the carousel, it links to the product catalog and automatically applies the corresponding filters.

#### Functional Requirements
1. The product carousel should display an array of items.
2. There should be one carousel for the best-selling items, calculated based on which items generate the most revenue.
3. There should be one carousel for each product category.
4. When the customer clicks the heading of the carousel, the system should link to the product catalog and automatically apply the corresponding filters.

