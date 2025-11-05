import { Button } from "../../../../components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../components/ui/dialog";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";

export function DialogBox({
  btnText,
  title,
  description,
}: {
  btnText: string;
  title: string;
  description?: string;
}) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">{btnText}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Invoice name</Label>
              <Input id="name-1" name="name" defaultValue="" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Date</Label>
              <Input
                id="username-1"
                name="username"
                type="date"
                defaultValue=""
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Item</Label>
              <Input
                id="username-1"
                name="username"
                defaultValue=""
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Price</Label>
              <Input
                id="username-1"
                name="username"
                defaultValue=""
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Qty</Label>
              <Input
                id="username-1"
                name="username"
                defaultValue=""
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Tax</Label>
              <Input
                id="username-1"
                name="username"
                defaultValue=""
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Paid by</Label>
              <Input
                id="username-1"
                name="username"
                defaultValue=""
              />
            </div>
          </div>
          <DialogFooter>
            <div className="flex w-full justify-end gap-5">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Add expense</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
