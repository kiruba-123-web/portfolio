import { useState } from "react";

const VoiceAssistant = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [listening, setListening] = useState(false);

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.start();

    setListening(true);

    recognition.onresult = async (event) => {
      const text = event.results[0][0].transcript;

      setQuestion(text);
      setListening(false);

      try {
        const res = await fetch(
          "https://portfolio-2-myso.onrender.com/api/questions/ask",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              question: text,
            }),
          }
        );

        const data = await res.json();

        setAnswer(data.answer);

        const speech = new SpeechSynthesisUtterance(
          data.answer
        );

        const speakWithFemaleVoice = () => {
          const voices =
            window.speechSynthesis.getVoices();

          const femaleVoice = voices.find(
            (voice) =>
              voice.name.includes("Female") ||
              voice.name.includes(
                "Google UK English Female"
              ) ||
              voice.name.includes(
                "Microsoft Zira"
              ) ||
              voice.name.includes("Samantha")
          );

          if (femaleVoice) {
            speech.voice = femaleVoice;
          }

          speech.rate = 1;
          speech.pitch = 1.1;
          speech.volume = 1;

          window.speechSynthesis.cancel();
          window.speechSynthesis.speak(speech);
        };

        if (
          window.speechSynthesis.getVoices()
            .length === 0
        ) {
          window.speechSynthesis.onvoiceschanged =
            speakWithFemaleVoice;
        } else {
          speakWithFemaleVoice();
        }

      } catch (error) {
        setAnswer(
          "Failed to connect to AI server."
        );
      }
    };

    recognition.onerror = () => {
      setListening(false);
      setAnswer(
        "Voice recognition failed."
      );
    };
  };

  return (
    <section
      id="voice"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="w-full max-w-4xl bg-[#081222] border border-gray-800 rounded-3xl p-10 shadow-2xl">

        <h2 className="text-5xl font-bold text-center text-purple-500 mb-10">
          AI Voice Assistant
        </h2>

        <div className="flex justify-center mb-10">
          <button
            onClick={startListening}
            className="bg-gradient-to-r from-purple-600 to-fuchsia-600 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition duration-300"
          >
            {listening
              ? "🎙 Listening..."
              : "🎤 Start Listening"}
          </button>
        </div>

        {question && (
          <div className="flex justify-end mb-6">
            <div className="bg-purple-600 rounded-2xl px-6 py-4 max-w-xl">
              <p className="font-semibold mb-2">
                You
              </p>

              <p>{question}</p>
            </div>
          </div>
        )}

        {answer && (
          <div className="flex justify-start">
            <div className="bg-gray-800 border border-purple-500 rounded-2xl px-6 py-4 max-w-xl">
              <p className="text-purple-400 font-semibold mb-2">
                Kiruba AI
              </p>

              <p className="text-gray-300 leading-7">
                {answer}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VoiceAssistant;