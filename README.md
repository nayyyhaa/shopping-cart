# shopping-cart - NeneXone
Shopping Cart based on concepts of Angular.
# Angular
    Javascript framework by Google.
## The essentials
   ## 1. Components // Basic building blocks 
### A) Component includes a TypeScript class with a @Component() decorator//data & functionality, inside this:
 - A CSS selector that defines how the component is used in a template
 - HTML elements in your template that match this selector become instances of the component.
 - An HTML template//determine UI- that instructs Angular how to render the component.
An optional set of CSS styles//look & feel-  that define the appearance of the template's HTML elements.
             
              import { Component } from '@angular/core';
               @Component({
                  selector: 'hello-world',
                  template: `
                      <h2>Hello World</h2>
                      <p>This is my first component!</p>
                      `,
                })
              export class HelloWorldComponent {
                  // The code in this class drives the component's behavior.
                }
 This guide demonstrates building an application with the following components.

    <app-root>—the first component to load and the container for the other components.
    <app-top-bar>—the store name and checkout button.
    <app-product-list>—the product list.
    <app-product-alerts>—a component that contains the application's alerts.
    <app-product-details>-the individual product details.
    <app-cart>-cart's details
    <app-shipping>-shipping price details
  
### B) an HTML template, 
### C) and styles.

   ## 2. Templates / /declares how that component renders (inline or filepath)

Angular extends HTML syntax -> insert dynamic values from component ->automatically updates the rendered DOM when your component’s state changes
Eg:  	
- A. Interpolation  
             `<p>{{ message }}</p>`
- B. property bindings, set values for properties and attributes of HTML elements and pass values to your application's presentation logic.

    `<p [id]="sayHelloId" [style.color]="fontColor">You can set my color in the component!</p>`
- C. event listeners to listen for and respond to user actions such as keystrokes, mouse movements, clicks, and touches.

      <button (click)="sayMessage()" [disabled]="canClick">Trigger alert message</button>
       The preceding example calls a method, which is defined in the component class:
        sayMessage() {
          alert(this.message)
      }

# Concepts used:

- Structural Directives : *ngFor and *ngIf
Structural directives shape or reshape the DOM's structure, by adding, removing, and manipulating elements.
            
  ##### In, src/app/product-list/product-list.component.html
            
                   `<h2>Products</h2>
                     <div *ngFor="let product of products">
                        <h3>
                            <a [title]="product.name + ' details'">
                              {{ product.name }}
                            </a>
                        </h3>
                      </div>`
- Property, Event Binding and Interpolation (explained above)

# Checkout full app - > https://nenexone.netlify.app/
