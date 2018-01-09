# <img src="https://github.com/pip-webui/pip-webui/raw/master/doc/Logo.png" alt="Pip.WebUI Logo" style="max-width:30%"> <br/> Document attachment controls

![](https://img.shields.io/badge/license-MIT-blue.svg)

Electronic documents are used a lot in enterprise. Ability to attach documents to any item in application is a great feature that can enhance user experience. 
Pip.WebUI.Documents module contains two controls to add/remove and visualize document attachments.

### Document list view

**Control shows a list of attached documents. It allows users to download the document by clicking on it**

**Using**

Template:
```html
<pip-document-list [documents]="docs"></pip-document-list>
```
Initialized data:
```typescript
docs = [
    {
        url: './assets/boy.png'
    },
    {
        url: './assets/girl.png'
    },
    {
        url: './assets/girl2.png'
    },
    {
        url: './assets/boy2.png'
    }
];
```

**Example on the image (all states)**

<a href="https://github.com/pip-webui2/pip-webui2-documents/raw/master/doc/images/document.png" style="display: block; text-align: center;">
    <img style="max-width: 300px" src="https://github.com/pip-webui2/pip-webui2-documents/raw/master/doc/images/document.png"/>
</a>

### Document list edit

**Control allows to attach files or remove them from the document list**

**Using**

Template:
```html
<pip-document-list-edit [documents]="docs" [disabled]="disabled" (onUpdateDocuments)="updateDocuments($event)"></pip-document-list-edit>
```
Initialized data:
```typescript
docs = [
    {
        url: './assets/boy.png'
    },
    {
        url: './assets/girl.png'
    },
    {
        url: './assets/girl2.png'
    },
    {
        url: './assets/boy2.png'
    }
];
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-documents/raw/master/doc/images/document-edit.png" style="display: block; text-align: center;">
    <img style="max-width: 300px" src="https://github.com/pip-webui2/pip-webui2-documents/raw/master/doc/images/document-edit.png"/>
</a>

## Installation

To install this module using npm:

```bash
npm install pip-webui2-documents --save
```

## <a name="license"></a>License

This module is released under [MIT license](License) and totally free for commercial and non-commercial use.
