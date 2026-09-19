// Add only owner-confirmed jobs. Unknown gallery photos must stay in the general gallery.
export type VerifiedOperation = {
  id: string;
  regionSlug: string;
  serviceSlug: string;
  date: string;
  vehicleType: string;
  issue: string;
  action: string;
  outcome: string;
  photo: { src: string; alt: string; publicationApproved: true };
  verification: { ownerConfirmed: true; recordReference: string };
};

export const VERIFIED_OPERATIONS: VerifiedOperation[] = [];

export function getVerifiedOperations(regionSlug: string, serviceSlug: string) {
  return VERIFIED_OPERATIONS.filter((operation) =>
    operation.regionSlug === regionSlug && operation.serviceSlug === serviceSlug
    && operation.verification.ownerConfirmed && operation.verification.recordReference.trim()
    && operation.photo.publicationApproved,
  );
}
