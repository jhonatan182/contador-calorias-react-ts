import { Activity } from "../types";

export type ActivityActions =
  | {
      type: "save-activity";
      payload: { newActivity: Activity };
    }
  | {
      type: "set-activityId";
      payload: { id: Activity["id"] };
    };

type ActivityState = {
  activities: Activity[];
  activityId: Activity["id"];
};

export const initialState: ActivityState = {
  activities: [],
  activityId: "",
};

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions
) => {
  if (action.type === "save-activity") {
    return {
      ...state,
      activities: [...state.activities, action.payload.newActivity],
    };
  }

  if (action.type === "set-activityId") {
    return {
      ...state,
      activityId: action.payload.id,
    };
  }

  return state;
};
