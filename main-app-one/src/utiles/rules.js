import moment from "moment";

export const rules = {
    required: (message = "Mandatory input field!") => ({
        required: true,
        message
    }),
    isDateAfter: (message) => () => ({
        validator(_, value) {
            if (moment(value).isSameOrAfter(moment(), 'day')) {
                return Promise.resolve();
            }
            // if (moment(value).isSameOrAfter(moment())) {
            //     return Promise.resolve()
            // }
            return Promise.reject(new Error(message));
        }
    })
}