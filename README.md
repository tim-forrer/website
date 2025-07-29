# [timforrer.xyz](timforrer.xyz)
This is a personal portfolio website
- Written in  Rust!
- Styled with  TailwindCSS!

## Project Structure
```
project/
├─ assets/ 
├─ src/
│  ├─ main.rs # App entrypoint
│  ├─ components/
│  │  ├─ mod.rs
│  │  ├─ home.rs
│  │  ├─ gallery.rs
│  │  ├─ navbar.rs
│  │  ├─ page404.rs
│  │  ├─ projects.rs
├─ Cargo.toml 
├─ Dioxus.toml
├─ spin.toml
```

## Serving locally
 To start the Tailwind watcher:
```bash
npx tailwindcss -i ./tailwind.css -o ./assets/tailwind.css --watch
```

 To start the web app
```bash
dx serve
```

## Roadmap
- [ ] Create the `/projects` page
    - [ ] Allow for  components
    - [ ] Create a folder with  files for each project
    - [ ] Dynamically create pages that inject the content of each file
    - [ ] Dynamically add routes to each of these pages
    - [ ] Populate `/projects` page with these pages

- [ ] Dynamically add images to `/gallery` page
    - [ ] Can perform queries to [Unsplash](www.unsplash.com) API to get image urls
    - [ ] Cache the result to some database
    - [ ] Query the database for the urls
    - [ ] Use urls to load images
