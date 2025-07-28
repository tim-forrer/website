use crate::Route;
use dioxus::prelude::*;
use dioxus_free_icons::icons::fa_brands_icons;
use dioxus_free_icons::Icon;

const LOGO: Asset = asset!("/assets/favicon.svg");

#[component]
pub fn Shell() -> Element {
    rsx! {
        div {
            id: "navbar",
            Link { to: Route::Home, img {src: LOGO} }
            Link { to: Route::Projects, "Projects" }
            Link { to: Route::Gallery, "Gallery" }
        }

        div {
            id: "content",
            Outlet::<Route> {}
        }

        footer {
            id: "footer",
            Link {
                to: "https://www.linkedin.com/in/timothy-f-46158b107/",
                Icon {
                    icon: fa_brands_icons::FaLinkedin,
                }
            }
            Link {
                to: "https://github.com/tim-forrer",
                Icon {
                    icon: fa_brands_icons::FaGithub,
                }
            }
        }
    }
}
