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

### 3.2 Product Page

#### Description and Priority
The product page is a high-priority feature that provides detailed information about each item. It includes a larger view of the product image, additional views of the product through thumbnails, and a color selection feature. When a customer selects a color, the product images update to reflect the selected color.

#### Functional Requirements
1. The product page should display detailed information about the item.
2. The page should include a larger view of the product image.
3. The page should provide additional views of the product through thumbnails.
4. The page should include a color selection feature. When a color is selected, the product images should update to reflect the selected color.
5. The page should feature a checkout button that adds the product with the selected color in the cart.

The dynamic page should include the information in this screenshot.
![Product Page screenshot](https://github.com/jakobnunnendorf/shop/blob/8ad14b0a896fe836429889393e0a486002f2ac54/product%2520page%2520screenshot.png)

### 3.3 Cart and Checkout

#### Description and Priority
The cart and checkout process is a high-priority feature that allows customers to review their selected items, adjust quantities, and proceed to purchase. The checkout process provides options for signing in to an existing account, registering a new account, or checking out as a guest.

#### Functional Requirements
1. The cart page should display a list of selected items, including their title, price, and thumbnail. If no items are selected, the page should display skeleton components and disable the checkout button.
2. Customers should be able to increment or decrement the quantity of each item in the cart.
3. Upon checkout, customers should be redirected to a page where they can choose to sign in to an existing account, register a new account, or check out as a guest.
4. If the customer chooses to sign in to an existing account, their email should be provided to Stripe to prefill their information, and if they have an existing delivery address, it should also be prefilled.
5. If the customer chooses to register and check out, the system should create their account in the background, send a verification email, and redirect them to Stripe checkout with their email prefilled.
6. If the customer chooses to check out as a guest, they should fill in their email and delivery address on the Stripe page.

### 3.4 Order Tracking and Review

#### Description and Priority
Order tracking and review is a high-priority feature that allows customers to view their order history, track the status of their orders, write reviews for completed orders, and request refunds or cancellations. 

#### Functional Requirements
1. The orders page should display a list of the customer's orders. Each row should include a thumbnail of the most expensive item in the order, the date of the order, the price of the order, and the order status.
2. Clicking the thumbnail or title of each order row should link to a dynamic page showing the complete view of the order. This page should display the same information as in the summary row as a heading, and below it should show the entire cart of the order.
3. The order page should show the status of the order (order accepted, paid, dispatched, delivered, review written) using a timeline with icons.
4. Once the order is delivered, the order page should show an interface for the customer to submit a review for the order.
5. Below the review interface, the order page should display a product carousel of similar items that the user may want to purchase.
6. At the bottom of the page, there should be an interface where the user can either cancel the order if it hasn't been dispatched yet or request a refund once it has been dispatched and they want to return it. The refund/cancel widget should feature a refund status timeline with instructions once the customer requested a refund.

##### Media
![Order time line](https://github.com/jakobnunnendorf/shop/blob/7610ec3cced019e53519657ebe5fd80a86b951c3/order%2520time%2520line%2520example.png)

### 3.5 Wishlist

#### Description and Priority
The wishlist is a high-priority feature that allows customers to save items they are interested in for future reference. Customers can add items to their wishlist from the product card and view their wishlist items on a dedicated page.

#### Functional Requirements
1. Each product card should include a heart-shaped wishlist button in the top left corner of the preview image.
2. If the user is logged in and clicks the wishlist button, the product ID should be added to the wishlist array in the user profile.
3. If the user is not logged in, the product ID should be added to the global state.
4. The wishlist page should display the user's wishlist items in a row view similar to the cart. Instead of a checkout button, there should be an "Add All to Cart" button and each row should have an individual "Add to Cart" button.
5. If the wishlist item does not store a color preference yet, the "Add to Cart" button for the specific item and the "Add All to Cart" button should be grayed out. An underlined text in orange should be displayed in the corresponding row saying "Please select a color". Clicking this text should forward the user to the dynamic product page where they can select a color and add the item to the cart.

### 3.6 User Account
#### 3.6.1 Account Creation and Authentication

- Users can create an account by providing their email address and creating a password. They also have the option to add their name and phone number, but these are not mandatory fields.
- The platform also offers the option to sign up using Google, Apple, or Facebook for a quicker registration process.
- User authentication is handled using JSON Web Tokens (JWT) or session-based authentication.

#### 3.6.2 Account Management

- Users have the ability to update their personal information, including their email address, name, and phone number.
- Users can add a delivery address and a billing address. If the user checks that delivery is the same as billing, the system will automatically copy the delivery address into the billing address field.
- Users can change their password at any time.
- Payment methods cannot be saved on the platform.
- Users have the option to delete their account, which will permanently remove all associated data in compliance with GDPR regulations.

#### 3.6.3 Order History

Users can access their past orders through a link to the order history page in their account. The detailed functionality of the order history page is covered in section 3.4.

#### 3.6.4 Wishlist Management

Users can access their wishlist through a link to the wishlist page in their account. The detailed functionality of the wishlist page is covered in section 3.5.

### 3.7 Admin Panel
#### 3.7.1 Order Management
- The admin can view all orders placed on the platform.
- The admin can update the status of orders (e.g., "out for delivery", "delivered", etc.).
- The admin can manage return requests and approve or disapprove them.
- The admin can manually edit and cancel orders if necessary (e.g., if a customer requests a change).
#### 3.7.1 Order Management

- The admin can view all orders placed on the platform. In the desktop view, each row of the incoming orders list displays the thumbnail of the item (or the thumbnail of the most expensive item if there are multiple items), the order date, the address, the order status, the number of days since the order status was last updated (with a status light that changes from green (less than 1 day) to red (more than 5 days) as the number of days increases), and the total cost. In the mobile view, the information in the row is limited to the thumbnail, date, status, and the days since last status change indicator.
- When the admin clicks on an order, it opens a dynamic page with all of the data associated with the order, including complete customer details, profile ID, a Google Maps widget showing the location pin of the address, and an interface to change the order status, cancel/edit the order, and edit the customer details. Both mobile and desktop views feature the same amount of information on the order management page.
- The admin can update the status of orders (e.g., "out for delivery", "delivered", etc.). When the order status changes, the system automatically informs the customer about the change via email.
- The admin can manage return requests and approve or disapprove them.
- The admin can manually edit and cancel orders if necessary (e.g., if a customer requests a change).

#### 3.7.2 User Management

- The admin can view all user profiles on the platform.
- The admin can manage user profiles, including updating user information.

#### 3.7.3 Product Management

- The admin can view a grid of all the product cards on the platform. The first element in the grid is an 'Add New Product' button.
- The admin can click on a product card to open the dynamic product page for that product. This page is similar to the regular product page but includes additional features for editing, deleting, and viewing product analytics (such as sales, stock, and clicks in comparison to the average of the category).
- The 'Add New Product' button opens a dynamic page with a form to fill in information about the new product.
- The admin can add new products, update existing products, and remove products from the catalogue.

#### 3.7.4 Analytics

- The admin can view analytics related to sales, user traffic, and performance on the platform.
- The analytics dashboard includes information such as total revenue, sales per item, user traffic, and performance metrics.

#### 3.7.5 Settings

- The admin can manage the content on the Help page through the Settings section in the admin panel.

### 3.8 Help Page

The Help page provides users with a variety of resources to assist them in using the online shop. This includes:

- **FAQs:** A list of frequently asked questions and their answers, pulled from the database.
- **Contact Information:** Contact information for customer support, pulled from the database.
- **Email Contact Form:** A form that users can fill out to send an email to customer support.
- **Delivery Options:** A table that outlines the different delivery options available to customers.
- **Privacy Policy and AGB:** Information about the online shop's privacy policy and general terms and conditions.
- **Order Tracking Information:** A section that explains how customers can track their orders and what each status means.
- **Return and Refund Policy:** Detailed information about how customers can return products and request refunds.
- **Payment Information:** Information about the payment methods accepted by the online shop.
- **Account Management:** Information on how to create an account, retrieve a forgotten password, and update account information.
- **Product Information:** Information about the products sold on the online shop.
- **Shipping Information:** Details about the shipping methods, estimated delivery times, and costs.

### 3.10 Search Functionality

The platform provides a search function to help users find products more easily. The functionality and requirements for the search feature include:

- **Text Search:** Users can enter text into the search bar located in the header. The system tokenizes the input text and returns a dropdown list of items that are most closely related to the input text.

### 3.11 Product Catalogue

The platform provides a product catalogue page where users can browse and filter products. The functionality and requirements for the product catalogue include:

- **Product Grid:** The product catalogue page displays products in a grid format.
- **Filter Bar:** Users can filter products by categories, devices, prices, reviews, and colors using the filter bar.

### 3.12 Product Reviews

The platform provides a product review feature where users can read and write reviews for products. The functionality and requirements for the product reviews include:

- **Review Display:** Product reviews are displayed on the product pages. They show the average review score (between 0 and 5) and the total number of reviews.
- **Review List:** When a customer clicks on the reviews bar, it opens a list of the last 5 reviews and an option to open a list of reviews for each star rating.
- **Writing Reviews:** Customers can write a review on the orders page, providing a star rating (0-5) and a comment.

### 3.14 Payment Processing

The platform provides a payment processing feature where users can pay for their orders. The functionality and requirements for the payment processing include:

- **Payment Gateway:** The payment processing is entirely handled by Stripe. 
- **Payment Confirmation:** Once a payment is fulfilled, Stripe sends a POST request back to our API via a webhook. This triggers an API call that updates the status of the corresponding order to 'Paid'.
