import React from 'react';
import { useForm } from 'react-hook-form';
import './style.css';

function Form() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="FormContact">
        <div className="container">
          <div className="col-lg-8 col-md-10 mx-auto">
            <p>
              Want to get in touch? Fill out the form below to send me a message and
              I will get back to you as soon as possible!
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              name="sentMessage"
              noValidate=""
              id="contactForm"
            >
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label htmlFor="Name">
                    Name
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      id="name"
                      required=""
                      data-validation-required-message="Please enter your name."
                      ref={register({ required: true, minLength: { value: 5, message: 'pls enter at least 5 character' } })}
                    />
                  </label>
                  {errors.name && <p className="character">{errors.name.message}</p>}

                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label htmlFor="Email">
                    Email Address
                    <input
                      name="email"
                      ref={register({
                        required: 'Required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'pls enter rigth email',
                        },
                      })}
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      id="email"
                      required=""
                      data-validation-required-message="Please enter your email address."
                    />
                  </label>
                  {errors.email && <p className="character">{errors.email.message}</p>}
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label htmlFor="Phone">
                    Phone Number
                    <input
                      name="phone"
                      ref={register({
                        required: 'Required',
                        pattern: {
                          value: /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/,
                          message: 'pls enter number',
                        },
                      })}
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number"
                      id="phone"
                      required=""
                      data-validation-required-message="Please enter your phone number."
                    />
                  </label>
                  {errors.phone && <p className="character">{errors.phone.message}</p>}
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label htmlFor="Message">
                    Message
                    <textarea
                      name="Message"
                      ref={register({
                        required: 'Required',
                        pattern: {
                          value: /^[a-z0-100_-]{3,16}$/,
                          message: 'pls dont endter special character',
                        },
                      })}
                      rows="5"
                      className="form-control"
                      placeholder="Message"
                      id="message"
                      required=""
                      data-validation-required-message="Please enter a message."
                    />
                  </label>
                  {errors.Message && <p className="character">{errors.Message.message}</p>}
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div id="success" />
              <div className="btnsend">
                <div className="clearfix">
                  <button type="submit" className="btn btn-primary" id="sendMessageButton">Send</button>
                </div>
                <hr className="hr-send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
