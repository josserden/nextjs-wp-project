import { useForm, ValidationError } from '@formspree/react';
import { FormInput } from 'components/FormInput';
import PropTypes from 'prop-types';

export const FormspreeForm = ({ formId }) => {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <section className="py-20">
        <div className="container">
          <b className=" block text-center font-body text-5xl uppercase text-sky-700">
            Thanks for joining!
          </b>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container">
        <h1 class="mb-10 text-center text-5xl font-bold uppercase">
          Send us a message
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mx-auto grid max-w-3xl grid-cols-1 gap-4 rounded-md border bg-slate-50 px-7 py-10 shadow-md"
        >
          <div className="grid grid-cols-1 gap-2">
            <label htmlFor="email">
              <span className="text-gray-700">Email Address</span>
            </label>
            <FormInput id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="grid grid-cols-1 gap-2">
            <label htmlFor="message">Message</label>
            <FormInput
              className="resize-none"
              $as={'textarea'}
              id="message"
              name="message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <div className="relative">
            <button type="submit" className="btn" disabled={state.submitting}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

FormspreeForm.propTypes = {
  formId: PropTypes.string.isRequired,
};
