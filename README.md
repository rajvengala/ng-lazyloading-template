# Demo1

## Create project
``` 
ng new demo1 --routing
```

## Create core module
> Core module contains 
> - components shared across all modules
> - singleton services
> - is imported by root module


```
ng generate module modules/core --routing
ng generate service modules/core/services/serviceX
ng generate component modules/core/component/componentX
```

## Create UI component module (using angular material in this demo)
```
ng generate module modules/ng-material
```

## Create feature modules
> Feature modules
> - import core module to access common components and services
> - can have their own services, but injected in component
```
ng generate module modules/module1 --routing
ng generate component modules/module1/components/component1
ng generate service modules/module1/services/service1

ng generate module modules/module2 --routing
ng generate component modules/module2/components/component2
```

## Setup routing in root modules and feature modules
