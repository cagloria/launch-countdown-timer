import { formatValue } from "../components/Count";

describe("determineValue", () => {
    test("changes a single-digit value to two-digits", () => {
        const result = formatValue(5);
        expect(result).toEqual(<>05</>);
    });

    test("does nothing to a two-digit value", () => {
        const result = formatValue(48);
        expect(result).toEqual(<>48</>);
    });

    test("does nothing to a three-digit value", () => {
        const result = formatValue(121);
        expect(result).toEqual(<>121</>);
    });

    test("changes a value with four or more digits to '999+'", () => {
        const result = formatValue(1000);
        expect(result).toEqual(
            <>
                999<span className="plus">+</span>
            </>
        );
    });
});
