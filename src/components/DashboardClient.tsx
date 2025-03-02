"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

// Types
type Link = {
  id: string
  url: string
  title: string
  image?: string
  order: number
}

type Design = {
  layout: "list" | "grid" | "carousel"
  primaryColor: string
}

type Click = {
  title: string
  clicks: number
}

export function DashboardClient() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("links")
  const [links, setLinks] = useState<Link[]>([
    { id: "1", url: "https://example.com", title: "Product 1", image: null, order: 0 },
    { id: "2", url: "https://shop.com", title: "Product 2", image: null, order: 1 },
    { id: "3", url: "https://store.com", title: "Product 3", image: null, order: 2 },
  ])
  const [design, setDesign] = useState<Design>({ layout: "list", primaryColor: "#0D9488" })
  const [clicks] = useState<Click[]>([
    { title: "Product 1", clicks: 10 },
    { title: "Product 2", clicks: 5 },
    { title: "Product 3", clicks: 8 },
  ])
  const [isAddLinkOpen, setIsAddLinkOpen] = useState(false)
  const [newLink, setNewLink] = useState({ url: "", title: "", image: "" })
  const [isLoadingPreview, setIsLoadingPreview] = useState(false)

  const handleLogout = () => {
    console.log("Logout")
    router.push("/")
  }

  const handleAddLink = () => {
    const newLinkObj: Link = {
      id: Date.now().toString(),
      url: newLink.url,
      title: newLink.title,
      image: newLink.image || null,
      order: links.length,
    }

    setLinks([...links, newLinkObj])
    setNewLink({ url: "", title: "", image: "" })
    setIsAddLinkOpen(false)
  }

  const handleUrlBlur = () => {
    if (newLink.url) {
      setIsLoadingPreview(true)
      // Simulate fetching preview data
      setTimeout(() => {
        setNewLink({ ...newLink, title: "Dummy Title" })
        setIsLoadingPreview(false)
      }, 1000)
    }
  }

  const handleLayoutChange = (layout: "list" | "grid" | "carousel") => {
    setDesign({ ...design, layout })
  }

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesign({ ...design, primaryColor: e.target.value })
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Card className="w-64 rounded-none shadow-lg h-screen fixed">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold">Lnkshop</h1>
        </div>
        <div className="p-6 space-y-2">
          <Button
            variant={activeTab === "links" ? "default" : "ghost"}
            className={
              activeTab === "links" ? "w-full justify-start bg-primary text-primary-foreground" : "w-full justify-start"
            }
            onClick={() => setActiveTab("links")}
          >
            Links
          </Button>
          <Button
            variant={activeTab === "analytics" ? "default" : "ghost"}
            className={
              activeTab === "analytics"
                ? "w-full justify-start bg-primary text-primary-foreground"
                : "w-full justify-start"
            }
            onClick={() => setActiveTab("analytics")}
          >
            Analytics
          </Button>
          <Button
            variant={activeTab === "design" ? "default" : "ghost"}
            className={
              activeTab === "design"
                ? "w-full justify-start bg-primary text-primary-foreground"
                : "w-full justify-start"
            }
            onClick={() => setActiveTab("design")}
          >
            Design
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start">
                More
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Card>

      {/* Main Content */}
      <div className="ml-64 p-8 w-full">
        <Tabs defaultValue="links" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          {/* Links Tab */}
          <TabsContent value="links">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Your Links</CardTitle>
                <Dialog open={isAddLinkOpen} onOpenChange={setIsAddLinkOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Add Link</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add a New Link</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="url">URL</Label>
                        <Input
                          id="url"
                          placeholder="https://"
                          value={newLink.url}
                          onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
                          onBlur={handleUrlBlur}
                        />
                      </div>

                      {isLoadingPreview && <p className="text-sm text-muted-foreground">Loading preview...</p>}

                      <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          placeholder="Title"
                          value={newLink.title}
                          onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="image">Image URL (optional)</Label>
                        <Input
                          id="image"
                          placeholder="Image URL"
                          value={newLink.image}
                          onChange={(e) => setNewLink({ ...newLink, image: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={() => setIsAddLinkOpen(false)}>
                        Cancel
                      </Button>
                      <Button
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                        onClick={handleAddLink}
                      >
                        Save
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                {links.length === 0 ? (
                  <p className="text-muted-foreground">No links yet. Add one to get started!</p>
                ) : (
                  <div className="space-y-4">
                    {links.map((link) => (
                      <Card key={link.id} className="shadow-lg hover:bg-muted p-4">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-muted rounded flex items-center justify-center">
                            {/* Replace with <Microlink url={link.url} size='small' /> */}
                            <span className="text-xs text-muted-foreground">Preview</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{link.title}</h3>
                            <p className="text-sm text-muted-foreground">{link.url}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
                {/* Add react-dnd DndProvider, useDrag, useDrop for reordering */}
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 mt-6"
                  onClick={() => setIsAddLinkOpen(true)}
                >
                  Add Link
                </Button>
              </CardContent>
            </Card>

            {/* Preview */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Live Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className={`
                  ${design.layout === "list" ? "space-y-4" : ""}
                  ${design.layout === "grid" ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : ""}
                  ${design.layout === "carousel" ? "flex overflow-x-auto gap-4 pb-4" : ""}
                `}
                >
                  {links.map((link) => (
                    <Card
                      key={link.id}
                      className={`shadow-lg p-4 ${design.layout === "carousel" ? "min-w-[250px]" : ""}`}
                    >
                      <div className="w-full h-24 bg-muted rounded-md mb-4 flex items-center justify-center">
                        {/* Replace with <Microlink url={link.url} size='normal' /> */}
                        <span className="text-xs text-muted-foreground">Preview</span>
                      </div>
                      <h3 className="font-semibold mb-2">{link.title}</h3>
                      <Button
                        className="w-full"
                        style={{ backgroundColor: design.primaryColor }}
                        onClick={() => window.open(link.url, "_blank")}
                      >
                        Visit
                      </Button>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                {clicks.length === 0 ? (
                  <p className="text-muted-foreground">No clicks yet. Share your link to start tracking!</p>
                ) : (
                  <>
                    <div className="w-full h-64 bg-muted rounded flex items-center justify-center">
                      {/* Replace with Chart.js Bar: labels=['Product 1', 'Product 2', 'Product 3'], data=[10, 5, 8] */}
                      <span className="text-muted-foreground">
                        Bar Chart: Product 1 (10 clicks), Product 2 (5 clicks), Product 3 (8 clicks)
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-4">
                      Total Clicks: {clicks.reduce((sum, click) => sum + click.clicks, 0)}
                    </p>
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Design Tab */}
          <TabsContent value="design">
            <Card>
              <CardHeader>
                <CardTitle>Design Your Storefront</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Layout</h3>
                  <div className="flex gap-4">
                    <Button
                      variant={design.layout === "list" ? "default" : "outline"}
                      className={design.layout === "list" ? "bg-primary text-primary-foreground" : ""}
                      onClick={() => handleLayoutChange("list")}
                    >
                      List
                    </Button>
                    <Button
                      variant={design.layout === "grid" ? "default" : "outline"}
                      className={design.layout === "grid" ? "bg-primary text-primary-foreground" : ""}
                      onClick={() => handleLayoutChange("grid")}
                    >
                      Grid
                    </Button>
                    <Button
                      variant={design.layout === "carousel" ? "default" : "outline"}
                      className={design.layout === "carousel" ? "bg-primary text-primary-foreground" : ""}
                      onClick={() => handleLayoutChange("carousel")}
                    >
                      Carousel
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Primary Color</h3>
                  <Input
                    type="color"
                    value={design.primaryColor}
                    onChange={handleColorChange}
                    className="w-16 h-16 p-0 border-none"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

