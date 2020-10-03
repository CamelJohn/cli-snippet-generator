# **MinSG**
**(mini snippet generator)**

<br>

## **The Rationale**
<br>

```
I'm learning React on some web Course.
The Code Is repetetive.

I made some vsCode JavaScript Snippets.
But...I still have to Create The Directories & Folders myself.

So...I decided to make a little tool to help my lazy sorry ass to some more shortcuts.

So far this tool is only for creating Class based & Functional components In React, as well as creating empty Folders.

I guess I'll stick some more snippets in here as I go along.
```
<br>

## **How does it work ?**
<br>

### **Install**

<br>

```
npm i minsg
```

<br>

## **Commands**

```html
 minsg g <component_type> <path_to_component>||<just_component>
```

```
  the component type can be :
  [1] cc - for Class Based Components
  [2] fc - for Functional Components
  [3] f - for empty Files
```

## **Example Usage**

<br>

```
  case 1: minsg g cc /file1/file2/componentName

  case 2: minsg g cc componentName

  case 3: minsg g fc /file1/file2/componentName

  case 4: minsg g fc componentName

  case 5: minsg g f fileName

  case 6: minsg g f /file/nestedFile/fileName
```

<br>

## **Still unsure ?**

<br>

```
You can basically create a Standalone component     with its own folder and sub (.js, .moduel.css) files in a target Folder chain.

Or you can do the same but create the whole folder chain up to your component from any target.

The same goes for creating files.
```

<br>

## **TODO**

<br>

```
[1] - Add functionality to remove Components.
```