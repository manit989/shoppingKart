import rawProducts from "./product.json";

export type RawProduct = {
  id: number;
  name: string;
  category: string;
  photo: string;
  info: string;
  price: number;
};

export type CatalogProduct = {
  id: number;
  title: string;
  price: number;
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
  price: product.price,
  description: product.info,
  category: product.category,
  image: product.photo,
  sectionId: slugify(product.category),
}));

const categoryMap = new Map<string, CatalogSection>();

for (const product of catalogProducts) {
  if (!categoryMap.has(product.sectionId)) {
    categoryMap.set(product.sectionId, {
      id: product.sectionId,
      title: titleCase(product.category),
      description: `Explore our ${product.category.toLowerCase()} collection.`,
    });
  }
}

export const catalogSections = Array.from(categoryMap.values());
export const catalogTags = catalogSections.map(section => section.title);
