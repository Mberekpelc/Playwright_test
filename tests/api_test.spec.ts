import { test, expect } from "@playwright/test";
test.describe.parallel('api testing', ()=>{
    const baseurl = 'https://reqres.in/api'

    test("simple api call", async ({request}) => {
        const response = await request.get(`${baseurl}/users/1`);
        const responsebBody = JSON.parse(await response.text());
        console.log(responsebBody);
        expect (response.status()).toBe(200);
        expect(responsebBody.data.id).toBe(1);
        expect(responsebBody.data.first_name).toContain("George");
        expect (responsebBody.data.email).toBeTruthy();
        
    })
    test("post resquest to create new user", async ({request})=> {
       const  response = await request.post(`${baseurl}/users`,{
        data: {
            id: 1000,
            email: 'george1.bluth@reqres.in',
            first_name: 'George1',
            last_name: 'Bluth1',
            avatar: 'https://reqres.in/img/faces/1-image.jpg'
          }
       })
       const responsebody = JSON.parse(await response.text())
       console.log(responsebody)
       expect(responsebody.id).toBe(1000)
        
    })

    test ('post login with username and password', async ({request})=>{
        const  response = await request.post(`${baseurl}/login`,{
            data: {
                email: 'eve.holt@reqres.in',
                password: 'cityslicka',
              }
           })
           const responsebody = JSON.parse(await response.text())
           console.log(responsebody)
           expect(response.status()).toBe(200)
           expect(responsebody.token).toBeTruthy()

    })

    test("put request update user", async ({request})=>{
        const response = await request.put(`${baseurl}/users/2`, 
            {data:{
            name: "new_name",
            job: "new_job",}
        })
        const responsebody = JSON.parse(await response.text())
        console.log(responsebody)
        expect(response.status()).toBe(200)
        expect(responsebody.name).toBe("new_name")
    })
    test("delete request delete user", async ({request})=>{
        const response = await request.delete(`${baseurl}/users/2`)
        expect(await response.status()).toBe(204)
    })

})