import { IMachine } from "../../src/providers/machineProvider/context";

export const flattenResponse = (doc: any): IMachine => {
  const fields = doc.fields;
  return {
    id: fields.id.stringValue,
    name: fields.name.stringValue,
    state: fields.state.stringValue,
    description: fields.description.stringValue,
    image: fields.image.stringValue,
    house_id: fields.house_id.stringValue,
    landlord_id: fields.landlord_id.stringValue,
  };
};

export const flattenResponses = (data: any): IMachine[] => {
  if (!data.documents || !Array.isArray(data.documents)) return [];
  return data.documents.map((doc: any) => flattenResponse(doc));
};