import { test as base } from "@playwright/test";
import { ArticleDevPage } from "./Articlepage";
import { LandingpageDev } from "./Landingpage";
// type myFixtures = {
//     ArticleDevPage: ArticleDevPage
//     LandingpageDev: LandingpageDev
// }
// export const test1 = base.extend<myFixtures>({
//         ArticleDevPage: async({page}, use) =>{
//             await use(new ArticleDevPage(page));
       
//         },
//         LandingpageDev: async({page}, use) =>{
//             await use(new LandingpageDev(page));
    
//         }
//     })
export const test2 = base.extend<{ArticleDevPage: ArticleDevPage
LandingpageDev: LandingpageDev}>({
    ArticleDevPage: async({page}, use) =>{
        await use(new ArticleDevPage(page));
   
    },
    LandingpageDev: async({page}, use) =>{
        await use(new LandingpageDev(page));

    }
})

//export const test = test1;
//export const expect = test2.expect
export const test = test2;
export const expect = test2.expect