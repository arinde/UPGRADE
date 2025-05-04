// Usage examples
import Button from "../components/button";

export default function Body() {
  return (
    <div className="space-y-4 p-4">
      <Button>Default Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="outline" size="small">Small Outline Button</Button>
      <Button variant="success" size="large">Large Success Button</Button>
      <Button variant="danger" disabled>Disabled Danger Button</Button>
      <Button variant="primary" fullWidth>Full Width Button</Button>
      <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
      <Button className="shadow-lg">Custom Class Button</Button>
    </div>
  );
}