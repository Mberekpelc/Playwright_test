import { test as base} from "@playwright/test";
import { ArticleDevPage } from "./Articlepage";
import { LandingpageDev } from "./Landingpage";



export const mytest = base.extend<{ArticleDevPage: ArticleDevPage, LandingpageDev: LandingpageDev}>({
    ArticleDevPage: async({page}, use) =>{
        await use(new ArticleDevPage(page));
   
    },
    LandingpageDev: async({page}, use) =>{
        await use(new LandingpageDev(page));

    }
})
export type myFixtures = {
    Username: string
    Password: String
    Age: number
}
export const mydata_test = base.extend<myFixtures>({
    Username: "lawman",
    Password: "passw0rd1",
    Age: 35
    })

export const test = mytest;
export const test1 = mydata_test;
export const expect = mytest.expect;