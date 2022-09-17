import React from "react";
import styles from "./main.module.css"
import { InputGroup,Form } from 'react-bootstrap'
import { Dashboard } from "./dashboard";
import { OrderDetails } from "./order_details";
export const Navbar=()=>{
    return <div>
           <nav className={styles.nav_main}>
                <div className={styles.search_bar}>
                    <img style={{color:"white"}} src="https://uploads-ssl.webflow.com/602bea2332bd8ff6426b5af8/602c03275eeaa26140a7f159_Footer%20Logo.svg"/>
                    <InputGroup className="mb-3" className={styles.input_form}>
                            <InputGroup.Text id="inputGroup-sizing-default">
                            <img width="20px" src="https://img.icons8.com/ios/2x/search--v1.png"/>
                            </InputGroup.Text>
                            <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            />
                    </InputGroup>
                </div>
                <div className={styles.right_nav}>
                    <img src="https://w1.pngwing.com/pngs/930/970/png-transparent-notification-icon-ios-7-iphone-icon-design-zooming-user-interface-button-apple-push-notification-service-computer-software.png"/>
                    <p>User Name</p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qFuR8lxo7gnQZK7NqyGpCxfbBUbRV8eOfQ&usqp=CAU"/>
                </div>
           
           </nav>
           <div className={styles.main_page}>
               <Dashboard/>
               <div className={styles.right_div}>
                    <div className={styles.vine}>
                        <spam>Overview</spam>
                        <spam className={styles.new_vine}>Add New Vine</spam>
                    </div>
                    <OrderDetails/>
               </div>
           </div>
           
    </div>
}