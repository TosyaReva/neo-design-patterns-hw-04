import { UserProfilePrototype } from "./UserProfilePrototype";

export class UserProfile implements UserProfilePrototype {
  constructor(
    public username: string,
    public department: "finance" | "engineering" | "marketing",
    public readonly permissions: {
      canEditUsers: boolean;
      canApproveBudget: boolean;
      canAccessInternalTools: boolean;
    }
  ) {}

  public clone() {
    return new UserProfile(this.username, this.department, structuredClone(this.permissions))
  }
}
