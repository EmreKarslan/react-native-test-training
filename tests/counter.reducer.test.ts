import counterReducer, {
  decrement,
  increment,
  incrementByAmount,
} from "@/store/reducers/counter/counter.reducer";
import { CounterState } from "@/store/reducers/counter/counter.types";

describe("counterReducer", () => {
  let initialState: CounterState;

  beforeEach(() => {
    initialState = { value: 0 };
  });

  it("should handle increment", () => {
    const newState = counterReducer(initialState, increment());
    expect(newState.value).toEqual(1);
  });

  it("should handle decrement", () => {
    const newState = counterReducer(initialState, decrement());
    expect(newState.value).toEqual(-1);
  });

  it("should handle incrementByAmount(positive input)", () => {
    const amount = 15;
    const newState = counterReducer(initialState, incrementByAmount(amount));
    expect(newState.value).toEqual(amount);
  });

  it("should handle incrementByAmount(negative input)", () => {
    const amount = -15;
    const newState = counterReducer(initialState, incrementByAmount(amount));
    expect(newState.value).toEqual(amount);
  });
});
