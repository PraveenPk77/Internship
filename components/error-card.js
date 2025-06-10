import { Card, CardContent } from "@/components/ui/card";

export default function ErrorCard({ message }) {
  return (
    <Card className="bg-red-50 border-red-200 mt-6">
      <CardContent className="pt-6">
        <p className="text-red-700">{message}</p>
      </CardContent>
    </Card>
  );
}
