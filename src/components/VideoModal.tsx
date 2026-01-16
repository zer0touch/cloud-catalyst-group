import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import capabilitiesVideo from "@/assets/videos/Zer0touch_Company_Overview.mp4";

interface VideoModalProps {
  trigger?: React.ReactNode;
}

const VideoModal = ({ trigger }: VideoModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="heroOutline" size="xl">
            <Play className="mr-2" size={20} />
            Watch Capabilities Deck
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0 bg-black border-none overflow-hidden">
        <video
          src={capabilitiesVideo}
          controls
          autoPlay
          className="w-full h-auto max-h-[80vh]"
        >
          Your browser does not support the video tag.
        </video>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
