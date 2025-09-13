import WhatsAppFloat from "../WhatsAppFloat";

export default function WhatsAppFloatExample() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">WhatsApp Float Example</h1>
        <p className="text-muted-foreground">
          Scroll down to see the floating WhatsApp button in action. It stays fixed in the bottom-right corner.
        </p>
        
        {/* Some content to demonstrate scrolling */}
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className="bg-card p-6 rounded-lg border border-card-border">
            <h2 className="text-xl font-semibold mb-2">Section {i + 1}</h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris.
            </p>
          </div>
        ))}
      </div>
      
      <WhatsAppFloat />
    </div>
  );
}