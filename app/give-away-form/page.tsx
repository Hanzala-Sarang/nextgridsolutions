"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function GiveawayForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    businessType: "",
    customBusinessType: "",
    businessLocation: "",
    businessDetails: "",
    websiteGoals: "",
    whyNeedWebsite: "",
    websiteUrgency: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...formData,
      businessType:
        formData.businessType === "other"
          ? formData.customBusinessType
          : formData.businessType,
    };

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        setSubmitted(true);
        toast.success("🎉 Form submitted! Redirecting you to our Instagram page...");
        setTimeout(() => {
          window.location.href =
            "https://www.instagram.com/nextgrid.solutions?igsh=aWN1c2xsMWM5bmVl";
        }, 3000);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white px-4 py-10 bg-[#f3f4f6]">
      <ToastContainer />

      {/* Poster + Form Container */}
      <div className="max-w-3xl mx-auto mt-28">
        {/* ✅ Poster Image */}
        <img
          src="/free website banner.jpg"
          alt="Giveaway Poster"
          className="w-full h-auto rounded-2xl shadow-2xl mb-10"
        />

        {/* ✅ Instagram Redirect Note */}
        <p className="text-center text-black font-medium mb-4">
          📢 After submitting, you'll be redirected to our Instagram page to follow us!
        </p>

        <div className="bg-white text-black p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#1B3CE2]">
            Claim Your Free Website
          </h2>

          {submitted ? (
            <p className="text-center text-green-600 font-semibold">
              Thank you! We’ll contact you shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="fullName"
                  onChange={handleChange}
                  value={formData.fullName}
                  placeholder="Full Name / Naam"
                  required
                  className="input"
                />
                <input
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  placeholder="Email Address / Email ID"
                  required
                  className="input"
                />
                <input
                  name="phone"
                  onChange={handleChange}
                  value={formData.phone}
                  placeholder="Phone Number / Mobile Number"
                  required
                  className="input"
                />
                <input
                  name="businessName"
                  onChange={handleChange}
                  value={formData.businessName}
                  placeholder="Business Name / Business ka Naam"
                  required
                  className="input"
                />
              </div>

              <input
                name="businessLocation"
                onChange={handleChange}
                value={formData.businessLocation}
                placeholder="Business Location (City, Area)"
                required
                className="input"
              />

              <div>
                <select
                  name="businessType"
                  onChange={handleChange}
                  value={formData.businessType}
                  required
                  className="input"
                >
                  <option value="">Business Type / Business ka Prakar</option>
                  <option value="retail">Retail / Dukaan</option>
                  <option value="service">Service / Seva</option>
                  <option value="technology">Technology / Takneek</option>
                  <option value="ecommerce">E-commerce / Online Dukaan</option>
                  <option value="education">Education / Shiksha</option>
                  <option value="other">Other / Koi Aur</option>
                </select>
                {formData.businessType === "other" && (
                  <input
                    type="text"
                    name="customBusinessType"
                    onChange={handleChange}
                    value={formData.customBusinessType}
                    placeholder="Please specify / Kripya likhiye"
                    className="input mt-3"
                    required
                  />
                )}
              </div>

              <textarea
                name="businessDetails"
                onChange={handleChange}
                value={formData.businessDetails}
                placeholder="Briefly describe your business (e.g clothing brand or others)"
                required
                className="textarea"
              />

              <textarea
                name="websiteGoals"
                onChange={handleChange}
                value={formData.websiteGoals}
                placeholder="What goals do you want to achieve with the website? / Website se kya goal hai aapka?"
                required
                className="textarea"
              />

              <textarea
                name="whyNeedWebsite"
                onChange={handleChange}
                value={formData.whyNeedWebsite}
                placeholder="Why do you need a website for your business? / Kyun chahiye website aapke business ke liye?"
                required
                className="textarea"
              />

              <select
                name="websiteUrgency"
                onChange={handleChange}
                value={formData.websiteUrgency}
                required
                className="input"
              >
                <option value="">How soon do you need it? / Kitni jaldi chahiye?</option>
                <option value="asap">ASAP / Turant</option>
                <option value="withinMonth">Within a month / 1 Mahine mein</option>
                <option value="3Months">Within 3 months / 3 Mahine mein</option>
                <option value="6Months">Within 6 months / 6 Mahine mein</option>
              </select>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#1B3CE2] text-white py-3 rounded-xl font-semibold hover:bg-[#0a2ca2] transition"
              >
                {loading ? "Submitting..." : "Apply Now"}
              </button>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        .input {
          padding: 0.75rem;
          border: 1px solid #ccc;
          border-radius: 0.75rem;
          width: 100%;
        }
        .textarea {
          padding: 0.75rem;
          border: 1px solid #ccc;
          border-radius: 0.75rem;
          width: 100%;
          min-height: 100px;
        }
      `}</style>
    </div>
  );
}
