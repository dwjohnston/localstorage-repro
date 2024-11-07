import { foo } from "./foo";

describe("foo", () => {
    it("bar", () => {
        expect(1+1).toBe(2);


        expect(foo()).toBe(2)
    })

    
})