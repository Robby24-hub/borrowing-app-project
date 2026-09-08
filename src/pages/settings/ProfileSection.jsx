import { useState } from "react";

export default function ProfileSection() {
  const [name, setName] = useState("Robby Candano");
  const [email, setEmail] = useState("robby@email.com");
  const [description, setDescription] = useState(
    "Keeping tabs on what I own and who has it.",
  );

  return (
    <div>
      <h2 className="font-display text-lg font-medium mb-1">Profile</h2>
      <p className="text-sm text-ink/50 mb-6">
        This is how you appear across the app.
      </p>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-ledger/10 text-ledger font-display text-xl font-medium flex items-center justify-center">
          RC
        </div>
        <button className="inventory-button">Change photo</button>
      </div>

      <div className="flex flex-col gap-4 max-w-md">
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-ink/60">Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-line rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:border-ledger transition-colors"
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-ink/60">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-line rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:border-ledger transition-colors"
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-ink/60">
            Short description
          </span>
          <textarea
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-line rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:border-ledger transition-colors resize-none"
          />
        </label>
      </div>

      <button className="quick-action-button mt-6 bg-ledger text-white border-ledger hover:bg-ledger/90">
        Save changes
      </button>
    </div>
  );
}
