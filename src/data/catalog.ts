import rawProducts from "./product.json";

export type RawProduct = {
  id: number;
  name: string;
  category: string;
  photo: string;
  info: string;
};

export type CatalogProduct = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  sectionId: string;
};

export type CatalogSection = {
  id: string;
  title: string;
  description: string;
};

const products = rawProducts as RawProduct[];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function titleCase(value: string) {
  return value
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export const catalogProducts: CatalogProduct[] = products.map(product => ({
  id: product.id,
  title: product.name,
  description: product.info,
  category: product.category,
  image: product.photo,
  sectionId: slugify(product.category),
}));

const categoryMap = new Map<string, CatalogSection>();

const sectionPrices: Record<string, string> = {
  "chairs": "Starting at ₹1500",
  "sofa": "₹3500 per seat",
  "workstation": "₹3500 per seat",
  "storage": "Starting at ₹9000",
  "podium": "Starting at ₹4500",
  "tables": "Starting at ₹4500",
  "student furniture": "Chair starting at ₹1500, Table starting at ₹4500",
  "kg furnitures series": "Chair starting at ₹1500, Table starting at ₹4500"
};

for (const product of catalogProducts) {
  if (!categoryMap.has(product.sectionId)) {
    const categoryLower = product.category.toLowerCase();
    const priceText = sectionPrices[categoryLower] ? ` | ${sectionPrices[categoryLower]}` : "";
    
    categoryMap.set(product.sectionId, {
      id: product.sectionId,
      title: titleCase(product.category),
      description: `Explore our ${categoryLower} collection.${priceText}`,
    });
  }
}

export const catalogSections = Array.from(categoryMap.values());
export const catalogTags = catalogSections.map(section => section.title);
