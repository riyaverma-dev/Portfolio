import React from "react";
import { Mail, Linkedin, MapPin, Send, MessageCircle } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import ThankYou from "../components/thankyou";

const Contact: React.FC = () => {

  const [state, handleSubmit] = useForm("mwpbawdq");
  if (state.succeeded) {
    return <ThankYou/>;
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "riya.verma.4030@gmail.com",
      href: "mailto:riya.verma.4030@gmail.com",
      color: "cyan",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "www.linkedin.com/in/riya-verma-38512a2b8",
      href: "https://www.linkedin.com/in/riya-verma-38512a2b8",
      color: "purple",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Delhi, India",
      href: "#",
      color: "pink",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: "from-cyan-500 to-cyan-600 bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      purple:
        "from-purple-500 to-purple-600 bg-purple-500/10 text-purple-400 border-purple-500/30",
      pink: "from-pink-500 to-pink-600 bg-pink-500/10 text-pink-400 border-pink-500/30",
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always excited to discuss new opportunities, collaborations, or
            just have a friendly chat about technology and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const colorClasses = getColorClasses(info.color);

                return (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      info.href.startsWith("http") ? "noopener noreferrer" : ""
                    }
                    className="block bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-[1.02] group"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-4 bg-gradient-to-r ${
                          colorClasses.split(" ")[0]
                        } ${
                          colorClasses.split(" ")[1]
                        } rounded-xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {info.label}
                        </h3>
                        <p className="text-gray-300">{info.value}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-4">
                <MessageCircle className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Why Connect With Me?
                  </span>
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-white">
                      Fresh Perspective
                    </h4>
                    <p className="text-gray-300 text-sm">
                      As a first-year student, I bring fresh ideas and
                      enthusiasm to every project
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-white">Quick Learner</h4>
                    <p className="text-gray-300 text-sm">
                      Passionate about learning new technologies and adapting to
                      challenges
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-white">
                      Collaborative Spirit
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Love working in teams and contributing to innovative
                      solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Send Me a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-white mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-white mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
              <p className="text-sm text-gray-400">
                Usually respond within 24 hours • All inquiries are welcome
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
