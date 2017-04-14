# Angular 4 Components

Generic components for angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Getting Started

```
npm install
npm install -g @angular/cli
ng serve
```
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Angular Components

* Wizard

**Outputs**

```
Wizard ( onNextStep, onBackStep, onRefresh,onComplete )
Wizard Step ( onNext, onBack )
```

**Inputs**

```
Wizard [ showNavbar, showMiniNavigation ]
Wizard Step [ title, canMoveNext, canMoveBack ]
```

```

<wizard (onNextStep)="onNextStep($event)" (onBackStep)="onBackStep($event)" (onComplete)="onComplete($event)">
    <wizard-step title="Initial">
        <transfer-in-country-initial-step></transfer-in-country-initial-step>
    </wizard-step>
    <wizard-step title="Confirm" [canMoveBack]="canMoveBackCondition">
        <transfer-in-country-confirm-step></transfer-in-confirm-initial-step>
    </wizard-step>
    <wizard-step title="Second Auth" [canMoveNext]="canMoveNextCondition" (onNext)="onNextSecondAuth($event)">
        <second-auth-step></second-auth-step>
    </wizard-step>
    <wizard-step title="Result" (onBack)="onBackExecute()">
        <transfer-in-country-result-step></transfer-in-result-initial-step>
    </wizard-step>
</wizard>

```

## Version
```0.1```

## Authors

* **Javier González Rodríguez** - [javico2609](https://github.com/javico2609)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details