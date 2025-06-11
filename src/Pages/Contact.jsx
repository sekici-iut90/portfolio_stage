import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-6"
            >
                Me contacter
            </motion.h2>

            <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4"
            >
                <input
                    type="text"
                    placeholder="Votre nom"
                    className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <input
                    type="email"
                    placeholder="Votre email"
                    className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <textarea
                    rows="5"
                    placeholder="Votre message"
                    className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
                ></textarea>
                <button
                    type="submit"
                    className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition"
                >
                    Envoyer
                </button>
            </motion.form>
        </section>
    );
}
