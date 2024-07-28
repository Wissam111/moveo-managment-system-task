export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

export class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
}

export class AlreadyExistsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AlreadyExistsError";
  }
}

export class InsufficientFundsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InsufficientFundsError";
  }
}

export class UserRoleError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UserRoleError";
  }
}

export class TooManyTriesError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "TooManyTriesError";
  }
}

export class CodeNotMatchError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CodeNotMatchError";
  }
}

export class CreditsLimitError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CreditsLimitError";
  }
}
